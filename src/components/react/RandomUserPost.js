import React, {useState, useEffect} from 'react';
import getApi from '../../adapters/commonApi';
import Spinner from '../general/Spinner';
import UserItem from './UserItem';

export default function RandomUsersPost() {

    const [users, setUsers] = useState({});
    const apiUrl = "https://randomuser.me/api/?results=3";

    useEffect(() => {
        getApi(apiUrl).then(setUsers);
      }, []);

    return (
        <div className="col-md-6 col-sm-12 mb-4">
            <div className="card">
                <div className="card-header">
                    <i className="bi bi-filetype-jsx" />
                    Random Users API
                </div>
                <div className="card-body users">
                {users.results ? (
                    users.results.map((user, key) => <UserItem key={key} item={user} /> )
                ) : ( 
                <Spinner /> 
                )}
                </div>
            </div>
        </div>
    );
}
