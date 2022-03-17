import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCryptoAccount, getBalance } from '../redux/actions';
import Button from '../components/Button';

const List = () => {

    const cryptoAccounts = useSelector((state) => state);

    const dispatch = useDispatch();

    function delAccount(cryptoAccount) {
        dispatch(deleteCryptoAccount(cryptoAccount));
      };

    function showBalance(cryptoAccounts) {
        dispatch(getBalance(cryptoAccounts));
    };

    function exportToCsv(cryptoAccounts) {
        let stringForCsv = " # ; Address ; Balance \n";
        cryptoAccounts.forEach((account, index) => stringForCsv += ` ${index+1} ; ${account.currencyAddress} ; ${account.balance} \n`);
        const data = new Blob([stringForCsv], {
            type: 'text/csv'
        }),
        csvURL = window.URL.createObjectURL(data),
        tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'My_Crypto_Balance.csv');
        tempLink.click();
    };

    if (!cryptoAccounts.length) {
        return <div className="title">There is no list</div>
      }

    return (
        <>
            <div className="title">LIST</div>
            <div className="wrapper-list">
                <div className="list-thead">
                    <div className="cell">#</div>
                    <div className="cell-adress">Address</div>
                    <div className="cell">Balance</div>
                    <div className="cell">Deletion</div>
                </div>
                {cryptoAccounts.map((cryptoAccount, index) =>
                    <div className="list-row" key={cryptoAccount.id}>
                        <div className="cell">{index+1}</div>
                        <div className="cell-adress">{cryptoAccount.currencyAddress}</div>
                        <div className="cell">{cryptoAccount.balance}</div>
                        <Button className="btn btn-del" onClick={() => delAccount(cryptoAccount)}>Delete</Button>
                    </div>
                )}
            </div>
            <Button onClick={() => showBalance(cryptoAccounts)}>Show balance</Button>
            <Button onClick={() => exportToCsv(cryptoAccounts)}>Export to CSV</Button>
        </>
    );
}

export default List;