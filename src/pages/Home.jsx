import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
    return (
        <div className="home">
            <UserSearch />
            <UserResults />
        </div>
    );
}

export default Home;