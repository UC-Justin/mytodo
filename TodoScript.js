window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const input_description = document.querySelector('#new-task-input-description');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        const describe = input_description.value;

        if (!task) {
            alert('Please fill out the task');
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const checkBtn = document.createElement('div');
        checkBtn.classList.add('check-box');
        checkBtn.setAttribute('title', 'Mark');

        const checkIcon = document.createElement('i')
        checkIcon.classList.add('fa');
        checkIcon.classList.add('fa-check');

        checkBtn.appendChild(checkIcon);

        task_el.appendChild(checkBtn);

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        const task_description_el = document.createElement('textarea');
        task_description_el.classList.add('task-description');
        task_description_el.type = 'text';
        task_description_el.innerText = describe;
        task_description_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        checkBtn.addEventListener('click', () =>{
            if (checkBtn.style.background !== 'var(--purple)'){
                checkBtn.style.background = 'var(--purple)';
                checkBtn.style.color = 'var(--light)';
                task_input_el.classList.add('line');
                task_description_el.classList.add('line');
                checkBtn.setAttribute('title', 'Unmark');
                console.log(true);
            }
            else {
                checkBtn.style.background = 'none';
                checkBtn.style.color = 'var(--grey)';
                task_input_el.classList.remove('line');
                task_description_el.classList.remove('line');
                checkBtn.setAttribute('title', 'Mark');
                console.log(false)
            }
        })

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_options_el = document.createElement('div');
        task_options_el.classList.add('options');

        const icon_el = document.createElement('li');
        icon_el.classList.add('fa');
        icon_el.classList.add('fa-ellipsis-v');

        const btn_container = document.createElement('ul');

        const description_list = document.createElement('li');
        const edit_list = document.createElement('li');
        const delete_list = document.createElement('li');

        const task_description_btn = document.createElement('button');
        task_description_btn.classList.add('description');
        task_description_btn.innerHTML = 'Show description';
        description_list.appendChild(task_description_btn);

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';
        edit_list.appendChild(task_edit_el);

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';
        delete_list.appendChild(task_delete_el);

        btn_container.appendChild(description_list)
        btn_container.appendChild(edit_list)
        btn_container.appendChild(delete_list)

        task_options_el.appendChild(icon_el);

        task_actions_el.appendChild(task_options_el);
        task_actions_el.appendChild(btn_container);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        list_el.appendChild(task_description_el);

        if (list_el.innerHTML == ''){
            list_el.innerText == 'NO TASK'
        }else{false}

        input.value = '';
        input_description.value = '';

        task_actions_el.addEventListener('click', ()=> {
            btn_container.classList.toggle('display');
        });

        task_description_btn.addEventListener('click', () => {
            if(task_description_el.classList.contains('display')){
                task_description_el.classList.remove('display');
                task_description_btn.innerText = 'Show description';
            }
            else{
                task_description_el.classList.add('display');
                task_description_btn.innerText = 'Hide description';
            }
        });

        task_edit_el.addEventListener('click', () => {
            if(task_input_el.classList.contains('line') | task_description_el.classList.contains('line')){
                alert('Please unmark task to edit');
                task_description_el.setAttribute('readonly', 'readonly');
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
                task_description_el.classList.remove('display');
            }
            else if (task_edit_el.innerText.toLowerCase() == 'edit'){
                task_input_el.removeAttribute('readonly', 'readonly');
                task_description_el.removeAttribute('readonly', 'readonly');
                task_input_el.focus();
                checkBtn.style.display = 'none';
                task_edit_el.innerText = 'Save';
                task_description_el.classList.add('display');
                task_description_btn.innerText = 'Hide description';
            }
            else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_description_el.setAttribute('readonly', 'readonly');
                checkBtn.style.display = 'flex';
                task_edit_el.innerText = 'Edit';
                task_description_el.classList.remove('display');
                task_description_btn.innerText = 'Show description';
            }
            /* else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_description_el.setAttribute('readonly', 'readonly');
                checkBtn.style.display = 'flex';
                task_edit_el.innerText = 'Edit';
            } */
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        });

        /* task_el.addEventListener('click', ()=>{
            if(btn_container.classList.contains('display')){
                btn_container.classList.remove('display');
            }
        }); */
    });
});