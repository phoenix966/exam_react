export const formatDate = (time) => {
    let date = new Date(time)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric',minute: 'numeric'};
    const num = date.toLocaleDateString('en-US', options)
    return num;
}
