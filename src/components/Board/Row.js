function Row({ children, ...props }) {
    return (
        <div className="row" {...props}>
            {children}
        </div>
    );
}

export default Row;