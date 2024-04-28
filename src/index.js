export default function (Alpine) {
    Alpine.directive('intersect-class', (el, { expression, modifiers }, { cleanup }) => {
        const classes = expression.split(' ').filter(Boolean)

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (! entry.isIntersecting) {
                    el.classList.remove(...classes)

                    return
                }

                el.classList.add(...classes)

                modifiers.includes('once') && observer.disconnect()
            })
        }, { threshold: getThreshold(modifiers) })

        observer.observe(el)

        cleanup(() => {
            observer.disconnect()
        })
    })
}

function getThreshold(modifiers) {
    if (modifiers.includes('full')) {
        return 0.99
    }

    if (modifiers.includes('half')) {
        return 0.5
    }

    if (! modifiers.includes('threshold')) {
        return 0
    }

    const threshold = modifiers[modifiers.indexOf('threshold') + 1]

    return threshold === '1' ? 1 : Number(`.${threshold}`)
}
