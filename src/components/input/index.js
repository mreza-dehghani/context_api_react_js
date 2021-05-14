export default ({ type, onChange, placeholder }) => {
	return <input type={type} onChange={e => onChange(e)} placeholder={placeholder} />;
};
