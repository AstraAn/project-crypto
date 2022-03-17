import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createAddress} from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';

const Adding = () => {

    const dispatch = useDispatch();

    const [newAddress, setNewAddress] = useState({
        currencyAddress: "",
    });

    function saveAddress(){
        if (!newAddress.currencyAddress.trim()) {
            return
        };

        const newCryptoAaccount = {
            id: Date.now().toString(),
            currencyAddress: newAddress.currencyAddress,
            balance: ""
        };
        dispatch(createAddress(newCryptoAaccount));

        let empty={};
        Object.keys(newAddress).forEach((key) => empty[key]= "");
        setNewAddress(empty);
    };

    function forSaveAddress (event) {
        setNewAddress({...newAddress, ...{[event.target.name]: event.target.value}})
    };

    return (
        <div className="adding">
            <div className="title">Аdding addresses cryptocurrency Bitcoin</div>
            <Input
                placeholder='Еnter the сurrency address'
                name='currencyAddress'
                value={newAddress.currencyAddress}
                onChange={forSaveAddress}
            />
            <Button onClick={saveAddress}>Save Address</Button>
        </div>
    );
}

export default Adding;