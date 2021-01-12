import React, {Component} from 'react';
import './Contracts.css';
import Contact from "../Contact/Contact";

const MALE = "https://www.flaticon.com/svg/static/icons/svg/1340/1340619.svg";
const FEMALE = "https://www.flaticon.com/svg/static/icons/svg/766/766514.svg";
const NONE = "https://cdn.emojidex.com/emoji/seal/question.png?1417137869";
const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    imageGender: MALE
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    imageGender: FEMALE
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: 'none',
    imageGender: NONE

}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    imageGender: FEMALE
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    imageGender: MALE
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    imageGender: MALE
}, {
    firstName: "Брюс",
    lastName: "Мобі",
    phone: "+380956319456",
    gender: "male",
    imageGender: MALE
}]
let getGender = contacts;

class Contracts extends Component {
    state = {
        contacts: contacts,
        search: '',
        male: true,
        female: true,
        none: true
    }
    getContacts = (e) => {
        let checkContacts = contacts.filter((contact) =>
            contact.gender === e.target.value
        )
        checkContacts.forEach(elem => {
            if (!getGender.includes(elem)) {
                getGender.push(elem)
            } else {
                for (let i = 0; i < getGender.length; i++) {
                    if (getGender[i] === elem) {
                        getGender = getGender.slice(0, i).concat(getGender.slice(i + 1))
                    }
                }
            }
        })
        this.setState({contacts: getGender})
    }
    handleSearchChange = (e) => {
        let changeContacts = contacts.filter((contact) =>
            contact.firstName.toLowerCase().includes(e.target.value.toLowerCase())
            || (contact.lastName.toLowerCase()).includes(e.target.value.toLowerCase())
            || contact.phone.includes(e.target.value)
        )
        this.setState({contacts: changeContacts, search: e.target.value});
    }
    handleSearchGender = (e) => {
        switch (e.target.value) {
            case 'male':
                this.setState({male: !this.state.male});
                this.getContacts(e);
                break;
            case 'female':
                this.setState({female: !this.state.female});
                this.getContacts(e);
                break;
            case 'none':
                this.setState({none: !this.state.none});
                this.getContacts(e);
                break;
            default:
                console.log('немає даних');
        }

    }
    render() {
        console.log(...this.state.contacts);
        return (
            <div>
                <input className="filterContact" type="text" placeholder="Пошук" value={this.state.search}
                       onChange={this.handleSearchChange}/>
                <label>Знайти контакти</label>
                <p className="gender">
                    <input className="check" type="checkbox" value="male" name="male" checked={this.state.male}
                           onChange={this.handleSearchGender}/>
                    <label>ч</label>
                    <input className="check" type="checkbox" value="female" name="female" checked={this.state.female}
                           onChange={this.handleSearchGender}/>
                    <label>ж</label>
                    <input className="check" type="checkbox" value="none" name="none" checked={this.state.none}
                           onChange={this.handleSearchGender}/>
                    <label>не вказана</label>
                </p>
                <div>
                    {[...this.state.contacts].map((item, i) => <Contact {...item} key={i}/>)}
                </div>
            </div>
        )
    }
}

export default Contracts;