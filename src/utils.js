export function updateInfo( url, formData, callback ) {
    this.$http({
        url: url,
        method: 'post',
        data: formData
    }).then( res => {
        if( res.data.responseDesc == '修改成功' ) {
            this.$message({
                message: '更新成功',
                type: 'success'
            })
        }else {
            this.$message({
                message: '网络错误,请稍后再试',
                type: 'error'
            })
        }
    }).then( () => {
        callback()
    }).catch( err => {
        this.$message({
            message: '网络错误,请稍后再试',
            type: 'error'
        })
    })
}