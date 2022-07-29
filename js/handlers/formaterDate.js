export function formateDate(date) {
    if (date.getHours() < 10) {
        if (date.getMinutes() < 10) {
            return ((date.getDate() )) + '/' + ((date.getMonth() + 1)) + "/" + date.getFullYear() + ' ' + '0' + date.getHours() + ':' + '0' + date.getMinutes();
        } return ((date.getDate() )) + '/' + ((date.getMonth() + 1)) + "/" + date.getFullYear() + ' ' + '0' + date.getHours() + ':' + date.getMinutes();
    } else {
        if (date.getMinutes() < 10) {
            return ((date.getDate())) + '/' + ((date.getMonth() + 1)) + "/" + date.getFullYear() + ' ' + '0' + date.getHours() + ':' + '0' + date.getMinutes();
        } return ((date.getDate() )) + '/' + ((date.getMonth() + 1)) + "/" + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }
}