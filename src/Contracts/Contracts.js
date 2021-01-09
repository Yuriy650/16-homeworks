import React, {Component} from 'react';
import './Contracts.css';
import Contact from "../Contact/Contact";
const MALE = "https://www.flaticon.com/svg/static/icons/svg/1340/1340619.svg";
const FEMALE = "https://www.flaticon.com/svg/static/icons/svg/766/766514.svg";
const NONE = "https://cdn.emojidex.com/emoji/seal/question.png?1417137869"
class Contracts extends Component {
    state = {
        contacts: [{
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
        }],
        search: ''
    }
    handleSearchChange = e => {
        this.setState({
            search: e.target.value, contacts: this.state.contacts.filter((contacts) => {
                    return (contacts.firstName[0].toLowerCase() + contacts.firstName.slice(1)).includes(this.state.search)
                        || (contacts.lastName[0].toLowerCase()+contacts.lastName.slice(1)).includes(this.state.search)
                        || contacts.phone.includes(this.state.search);
                }
            )
        });
    }
    handleSearchGender = e => {
                        this.setState({contacts: this.state.contacts.filter((contacts)=>{
                            return contacts.gender === e.target.value
                            })})
    }
    render() {
        console.log(...this.state.contacts);
        return (
            <div>
                <input className="filterContact" type="text" placeholder="Пошук" value={this.state.search}
                       onChange={this.handleSearchChange}/>
                       <label>Знайти контакти</label>
                <p className="gender">
                    <input className="check"  type="checkbox" value="male" name="male" onChange={this.handleSearchGender}/>
                    <label>ч</label>
                    <input className="check"  type="checkbox" value="female" name="female" onChange={this.handleSearchGender}/>
                    <label>ж</label>
                    <input className="check"  type="checkbox" value="none" name="none" onChange={this.handleSearchGender}/>
                    <label>не вказана</label>
                </p>
                <div>
                    {this.state.contacts.map((e, i) => <Contact {...this.state.contacts[i]} key={i}/>)}
                </div>
            </div>
        )
    }
}
export default Contracts;