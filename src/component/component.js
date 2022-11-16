function Box({val}){
    return(<div style={{border:"2px solid red",
                        height:"200px",
                        width:"200px",
                        borderRadius:"5px",
                        display:'flex',
                        justifyContent: "center",
                        alignItems:'center',
                        fontSize: "72px",
                        fontWeight: "700"
                        }}>{val}</div>)
}
export default Box