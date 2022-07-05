import spinner from "./assets/spinner.gif";

const Spinner = () => {
    return (
        <div className="spinner w-100 mt-200">
            <img className="text-center mx-auto" src={spinner} alt="Loading..." width={180} />
        </div>
    );
}

export default Spinner;