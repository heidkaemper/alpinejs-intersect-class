export default function (Alpine) {
    Alpine.directive('intersect-class', (el, { expression, modifiers }, { cleanup }) => {
        let classes = expression.split(' ').filter(Boolean);

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio === 0) {
                    el.classList.remove(...classes);

                    return;
                }

                el.classList.add(...classes);

                modifiers.includes('once') && observer.disconnect();
            });
        });

        observer.observe(el);

        cleanup(() => {
            observer.disconnect();
        });
    });
}
