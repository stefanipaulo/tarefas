document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const input = document.getElementById('new-task');
    const categorySelect = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');

    // Array para armazenar as tarefas
    let tasks = [];

    // Função para renderizar a lista de tarefas
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', () => removeTask(index));
            taskItem.appendChild(removeButton);
            taskItem.addEventListener('click', () => toggleTask(index));
            taskList.appendChild(taskItem);
        });
    }

    // Função para adicionar uma nova tarefa
    function addTask(taskName, category) {
        tasks.push({ name: taskName, category: category, completed: false });
        renderTasks();
        input.value = ''; // Limpar o campo de entrada após adicionar a tarefa
    }

    // Função para remover uma tarefa
    function removeTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    // Função para marcar/desmarcar uma tarefa como concluída
    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    // Evento de envio do formulário (adicionar tarefa)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impedir o comportamento padrão do formulário
        const taskName = input.value.trim();
        const category = categorySelect.value;
        if (taskName !== '') {
            addTask(taskName, category);
        }
    });

    // Inicializar a lista de tarefas
    renderTasks();
});
