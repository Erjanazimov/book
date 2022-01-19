import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editLocalEdit, eventually} from "../../../redux/actions";
import {toast} from "react-toastify";

function Information(props){
    const informationContact = useSelector(state => state.contactReducer);
    const dispatch = useDispatch();
    const editHandle = (e) => {
        const target = e.target.dataset.edit;
        const value = e.target.value;
        dispatch(eventually(target, value))
    }

    function removeDuplicates(originalArray, prop) {
        let newArray = [];
        let lookupObject  = {};

        for(let i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for(let i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }

    const edit = (id) => {
        const data = localStorage.getItem("data");
        const parse = JSON.parse(data)
        let contentDuplicates = removeDuplicates(parse, "id");

        const find = parse.find(item => item.id === id);
        find.name = informationContact.name;
        find.username = informationContact.username;
        find.email = informationContact.email;
        find.phone = informationContact.phone;
        find.website = informationContact.website;
        parse.push(find);
        localStorage.setItem("data", JSON.stringify(contentDuplicates));
        dispatch(editLocalEdit(contentDuplicates))
        toast.success("Успешно изменено")
    }

    return(
        <div className="offcanvas-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Имя:</label>
                    <input onChange={editHandle} id="name" data-edit="name" type="text"
                           className="form-control" value={informationContact.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Пользователь</label>
                    <input onChange={editHandle} id="username" data-edit="username" type="text"
                           className="form-control mt-2" value={informationContact.username}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input onChange={editHandle} id="email" data-edit="email" type="text"
                           className="form-control mt-2" value={informationContact.email}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Номер телефона</label>
                    <input onChange={editHandle} id="phone" data-edit="phone" type="text"
                           className="form-control mt-2" value={informationContact.phone}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="website" className="form-label">Ссылка на сайт:</label>
                    <input onChange={editHandle} id="website" data-edit="website" type="text"
                           className="form-control mt-2" value={informationContact.website}/>
                </div>

                <button onClick={() => edit(props.id)} type="button" className="btn btn-outline-success form-control">Изменить</button>

            </form>






        </div>
    )
}

export default Information;