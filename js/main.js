(() => {
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    const sidebar = document.querySelector('.sidebar');

    if (mediaQuery.matches && sidebar) {
        sidebar.classList.remove('show');
    }

    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    });

    document.querySelectorAll('.dropdown__content').forEach((dropDownWrapper) => {
        const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
        const dropDownSearch = dropDownWrapper.querySelector('.dropdown__search input');

        const filterList = (searchTerm) => {
            const query = searchTerm.toLowerCase();

            dropDownListItems.forEach((option) => {
                const label = option.textContent.trim().toLowerCase();
                option.style.display = label.includes(query) ? 'block' : 'none';
            });
        };

        dropDownBtn.addEventListener('click', (event) => {
            event.preventDefault();
            dropDownList.classList.toggle('dropdown__list--visible');
            dropDownBtn.classList.add('dropdown__button--active');
        });

        dropDownListItems.forEach((listItem) => {
            listItem.addEventListener('click', (event) => {
                event.stopPropagation();
                dropDownBtn.textContent = listItem.textContent.trim();
                dropDownBtn.focus();
                dropDownInput.value = listItem.dataset.value || '';
                dropDownList.classList.remove('dropdown__list--visible');
            });
        });

        if (dropDownSearch) {
            dropDownSearch.addEventListener('keyup', (event) => {
                filterList(event.target.value);
            });
        }

        document.addEventListener('click', (event) => {
            if (!dropDownWrapper.contains(event.target)) {
                dropDownBtn.classList.remove('dropdown__button--active');
                dropDownList.classList.remove('dropdown__list--visible');
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab' || event.key === 'Escape') {
                dropDownBtn.classList.remove('dropdown__button--active');
                dropDownList.classList.remove('dropdown__list--visible');
            }
        });
    });
})();
