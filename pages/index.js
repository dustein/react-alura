function Title(props) {
    console.log(props)
    return(
        <h1>{props.children}</h1>

        )
};

function HomePage() {
    return (
        <div>
            <Title>React!</Title>
            <h2>here we go...</h2>
            <p>GO</p>
            <style jsx>
                {`
                    h1{
                        color: green;
                    }
                `}
            </style>
        </div>
    )
}

export default HomePage;
