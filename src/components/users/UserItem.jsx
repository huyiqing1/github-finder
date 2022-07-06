import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
    return (
        <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>
            <div className="user-item card shadow-md compact side bg-base-100">
                <div className="flex-row items-center space-x-4 card-body">
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{login}</h2>
                        View Profile
                    </div>
                </div>
            </div>
        </Link >
    );
}

export default UserItem;