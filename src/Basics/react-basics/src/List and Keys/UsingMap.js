function UsingMap() {
    const arr = [1,2,3,4,5];
    return (
        <div>
            {
                arr.map(ele => (
                    <p>
                        {ele}
                    </p>
                ))
            }
        </div>
    )
}
export default UsingMap;