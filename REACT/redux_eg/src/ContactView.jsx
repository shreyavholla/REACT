export default function ContactView({contact, deleteContact}){
    let {email,name} = contact;
    return <div className="row">
        <li>
        {email}, {name} <button onClick={() => deleteContact(email)}>&times;</button>
    </li><br />
    </div>
}