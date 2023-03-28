import React, { useState } from "react";

const AddTodo = () => {
    const statuses = ['CREATED', 'IN PROGRESS', 'COMPLETED', 'CANCELED'];
    const priorities = ['HIGH', 'MEDIUM', 'LOW' ];
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState([]);
    const [priority, setPriority] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
                const todo ={
                    title,
                    description,
                    status,
                    priority
                }
    };

    fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    })
        .then((response) => {
            if (response.ok) {
                return response.json().then(todo => setTodos());
            } else {
                console.log(response)
            }
        })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

};

return (
    <div className="todo--form">
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend> Add new Todo </legend>

                <div className="form--task">
                    <label>Todo</label>
                    <input className="form--input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form--description form--input">
                    <label>Description</label>
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form--status">
                    {statuses.map((e, index) => (
                        <div key={index}>
                            <input className="form--input"
                                type="radio"
                                value={status}
                                name="status"
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="">{e}</label>
                        </div>
                    ))}
                </div>
                <div className="form--priority">
						<label htmlFor="">Priority</label>
						<select>
							{priorities.map((e, index) => (
								<option
									key={index}
									value={priority}
									onChange={(e) => setPriority(e.target.value)}
								>
									{e}
								</option>
							))}
						</select>
					</div>
					<div className="form-btn">
						<button>Add Todo</button>
					</div>
            </fieldset>
        </form>
    </div>
);
export default AddTodo;
