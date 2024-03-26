
const CustomInput = ({ type, placeholder }) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className='rounded-md border-none outline-none w-full p-3 bg-dashboard-secondary' />
        </div>
    );
};

export default CustomInput;