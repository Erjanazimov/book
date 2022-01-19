import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {contactEdit} from "../../../redux/actions";
import Information from "../information/Information";

function Contact({contact}){
    const dispatch = useDispatch();
    const stateContact = useSelector(state => state.listReducer.listGet)
    const loader = useSelector(state => state.listReducer.loader)
    const [idPost, setIdPost] = useState(0)

    const editUser = (id) => {
        setIdPost(id);
        const search = stateContact.find(item => item.id === id);

        dispatch(contactEdit(search))
    }
    return(
        <>
            {!loader ? <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Пользователь</th>
                        <th scope="col">E-mail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contact.map(item => {
                        return <>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}
                                </td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>
                                    <a onClick={() => editUser(item.id)} className="btn btn-outline-secondary mx-2"
                                       data-bs-toggle="offcanvas" href={`#offcanvasExamplee${item.id}`}
                                       role="button" aria-controls="offcanvasExample"> Редактировать
                                    </a>
                                    <a onClick={() => editUser(item.id)} className="btn btn-outline-success mx-2"
                                       data-bs-toggle="offcanvas" href={`#offcanvasExample${item.id}`}
                                       role="button" aria-controls="offcanvasExample"> Подробнее
                                    </a>
                                    <div className="offcanvas offcanvas-start" tabIndex="-1"
                                         id={`offcanvasExample${item.id}`}
                                         aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">{item.name}</h5>
                                            <button type="button" className="btn-close text-reset"
                                                    data-bs-dismiss="offcanvas"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">Пользователь: <b>{item.username}</b>
                                                </li>
                                                <li className="list-group-item">E-mail: <b>{item.email}</b></li>

                                                <li className="list-group-item">Номер телефона: <b>{item.phone}</b>    </li>
                                                <li className="list-group-item">Сайт: <b>{item.website}</b>    </li>
                                                <li>
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingThree">
                                                                <button className="accordion-button collapsed"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseThree"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseThree">
                                                                    <b>Адрес</b>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseThree"
                                                                 className="accordion-collapse collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-bs-parent="#accordionExample">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item">
                                                                        <b>StreetA </b>: {item.address.streetA}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>StreetB </b>: {item.address.streetB}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>StreetC </b>: {item.address.streetC}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>StreetD </b>: {item.address.streetD}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>Город </b>: {item.address.city}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>Государство: </b>: {item.address.state}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>Страна: </b>: {item.address.country}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        <b>Почтовый индекс: </b>: {item.address.zipcode}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                <button className="accordion-button collapsed"
                                                                        type="button" data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseTwo"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseTwo">
                                                                    <b>Компания</b>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo"
                                                                 className="accordion-collapse collapse"
                                                                 aria-labelledby="headingTwo"
                                                                 data-bs-parent="#accordionExample">
                                                                <li className="list-group-item">
                                                                    <b>Название: </b>: {item.company.name}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <b>Фраза: </b>: {item.company.catchPhrase}
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <b>BS: </b>: {item.company.bs}
                                                                </li>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="flush-headingOne">
                                                                <button className="accordion-button collapsed"
                                                                        type="button" data-bs-toggle="collapse"
                                                                        data-bs-target="#flush-collapseOne"
                                                                        aria-expanded="false"
                                                                        aria-controls="flush-collapseOne">
                                                                    <b>Сообщение</b>
                                                                </button>
                                                            </h2>
                                                                <div id="flush-collapseOne"
                                                                     className="accordion-collapse collapse p-2"
                                                                     aria-labelledby="flush-headingOne"
                                                                     data-bs-parent="#accordionFlushExample">
                                                                    {item.posts.map(post => (
                                                                    <li>
                                                                       <b>Words:</b> {post.words.join(", ")} :
                                                                        <p><span className="fw-bolder">Sentence: </span>
                                                                            <span className="fst-italic">{post.sentence}</span>
                                                                        </p>
                                                                        <p><span className="fw-bolder">Sentences: </span>
                                                                            <span className="fst-italic">{post.sentences}</span>
                                                                        </p>
                                                                        <p><span className="fw-bolder">Paragraph: </span>
                                                                            <span className="fst-italic">{post.paragraph}</span>
                                                                        </p>
                                                                        <hr/>
                                                                    </li>
                                                                    ))}
                                                                </div>


                                                        </div>

                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header"
                                                                id="panelsStayOpen-headingThree">
                                                                <button className="accordion-button collapsed"
                                                                        type="button" data-bs-toggle="collapse"
                                                                        data-bs-target="#panelsStayOpen-collapseThree"
                                                                        aria-expanded="false"
                                                                        aria-controls="panelsStayOpen-collapseThree">
                                                                    <b>История аккаунта</b>
                                                                </button>
                                                            </h2>
                                                            <div id="panelsStayOpen-collapseThree"
                                                                 className="accordion-collapse collapse"
                                                                 aria-labelledby="panelsStayOpen-headingThree">
                                                                {item.accountHistory.map(account => (
                                                                    <>
                                                                     <li className="list-group-item">
                                                                         <p>Количество: {account.amount}</p>
                                                                         <p>Дата: {account.date}</p>
                                                                         <p>Бизнес: {account.business}</p>
                                                                         <p>Имя: {account.name}</p>
                                                                         <p>Тип: {account.type}</p>
                                                                         <p>Счет: {account.account}</p>
                                                                    </li>
                                                                     </>
                                                                ))}
                                                            </div>
                                                        </div>

                                                    </div>

                                                </li>
                                                <li>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <div className="offcanvas offcanvas-start" tabIndex="-1" id={`offcanvasExamplee${item.id}`}
                                 aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Редактирование</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                </div>
                                <Information id={item.id} />
                            </div>
                        </>
                    })
                    }


                    </tbody>
                </table>


            }
        </>
    )
}

export default Contact;