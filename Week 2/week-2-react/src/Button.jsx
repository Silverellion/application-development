function createButton({ type }) {
    if(type === "primary") backgroundColor = "rgb(200, 255, 255)"
    if(type === "danger") backgroundColor = "rgb(200, 0, 0)"
    if(type === "success") backgroundColor = "rgb(120, 255, 120)"
    return (
        <button
            style={{
                backgroundColor
            }}
        >
            hello
        </button>
    )
}

export default createButton