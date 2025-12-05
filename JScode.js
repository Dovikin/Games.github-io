        document.addEventListener('DOMContentLoaded', function() {
            // Функция переключения видимости секций
            function showSection(sectionId) {
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active-section');
                });
                document.getElementById(sectionId).classList.add('active-section');
            }

            // Обработчики для навигационных кнопок
            document.querySelectorAll('.nav-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const target = button.getAttribute('data-target');
                    showSection(target);
                });
            });
        });