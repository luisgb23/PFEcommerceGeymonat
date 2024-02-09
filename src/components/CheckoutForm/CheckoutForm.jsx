import {useState} from 'react'
const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleConfirm = (event) =>{
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
        console.log(userData)
    }
    return (
        <form onSubmit={handleConfirm} className='form'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" 
                value={name} onChange={handleNameChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Telefono</label>
                <input type="number" className="form-control" id="phone" 
                value={phone} onChange={handlePhoneChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" 
                value={email} onChange={handleEmailChange}
                />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-danger">Crear orden</button>
            </div>
        </form>
    )
}

export default CheckoutForm