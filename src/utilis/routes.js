// export const routes={
//     dashboard: '/app',
//     playlist: '/app/playlist'
// }


export const routes={
    dashboard() { 
        return '/dashboard'
    },
    playlist(){
        // return '/app/playlist'
        const dashboard=this.dashboard()
        return dashboard +'/playlist'
    }
}