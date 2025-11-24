// resources/Private/Assets/JavaScript/code-tabs.js

function initCodeTabs() {
    const blocks = document.querySelectorAll('[data-code-tabs]');
    if (!blocks.length) return;

    blocks.forEach(block => {
        const tabs   = block.querySelectorAll('.code-tab');
        const panels = block.querySelectorAll('.code-panel');
        const copyBtn = block.querySelector('.code-copy');

        if (!tabs.length || !panels.length) return;

        // Helper: Tab/Panels aktiv setzen
        const activateTab = (tab) => {
            const targetSelector = tab.getAttribute('data-target');
            const targetPanel = targetSelector ? block.querySelector(targetSelector) : null;
            if (!targetPanel) return;

            tabs.forEach(t => {
                const isActive = t === tab;
                t.setAttribute('aria-selected', String(isActive));
                t.classList.toggle('border-sky-400', isActive);
                t.classList.toggle('border-transparent', !isActive);
                t.tabIndex = isActive ? 0 : -1;
            });

            panels.forEach(panel => {
                panel.classList.toggle('hidden', panel !== targetPanel);
            });
        };

        // Klick-Handling
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                activateTab(tab);
                tab.focus();
            });

            // Pfeiltasten-Navigation (links/rechts)
            tab.addEventListener('keydown', (event) => {
                if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
                    return;
                }

                event.preventDefault();

                const currentIndex = Array.prototype.indexOf.call(tabs, tab);
                let newIndex = currentIndex;

                if (event.key === 'ArrowRight') {
                    newIndex = (currentIndex + 1) % tabs.length;
                } else if (event.key === 'ArrowLeft') {
                    newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                }

                const newTab = tabs[newIndex];
                activateTab(newTab);
                newTab.focus();
            });
        });

        // Initialzustand: erster Tab aktiv
        activateTab(tabs[0]);

        // Copy-Button
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                const activePanel = Array.from(panels).find(
                    panel => !panel.classList.contains('hidden')
                );
                if (!activePanel) return;

                const codeElement = activePanel.querySelector('code');
                if (!codeElement) return;

                const text = codeElement.textContent || '';

                try {
                    await navigator.clipboard.writeText(text);
                    const oldLabel = copyBtn.textContent;
                    copyBtn.textContent = 'Copied!';
                    copyBtn.disabled = true;
                    setTimeout(() => {
                        copyBtn.textContent = oldLabel || 'Copy Code';
                        copyBtn.disabled = false;
                    }, 1500);
                } catch (error) {
                    console.error('Copy failed', error);
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', initCodeTabs);
