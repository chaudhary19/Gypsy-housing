import Data from '../Data';

const Store = () =>(
    {
        suggestionList: Data,
        favouriteList: Array<{
            id: string,
            name: string,
            photoUrl: string
        }>(),
        rejectedList: Array<{
            id: string,
            name: string,
            photoUrl: string
        }>(),
        suggestionToFavourite(id: string){
            const index = this.suggestionList.findIndex(curr=>curr.id === id);
            const obj = this.suggestionList.filter((curr, idx) => idx === index);
            this.suggestionList.splice(index, 1);
            this.favouriteList.push(obj[0]);
        },
        suggestionToRejected(id:string){
            const index = this.suggestionList.findIndex(cur=>cur.id===id);
            const obj=this.suggestionList.filter((cur,idx)=>idx===index);
            this.suggestionList.splice(index,1);
            this.rejectedList.push(obj[0]);
        },
        rejectedToFavourite(id:string){
            const index = this.rejectedList.findIndex(cur=>cur.id===id);
            const obj=this.rejectedList.filter((cur,idx)=>idx===index);
            this.rejectedList.splice(index,1);
            this.favouriteList.push(obj[0]);
        },
        favouriteToRejected(id:string){
            const index = this.favouriteList.findIndex(cur=>cur.id===id);
            const obj=this.favouriteList.filter((cur,idx)=>idx===index);
            this.favouriteList.splice(index,1);
            this.rejectedList.push(obj[0]);
        }

    }
);

export default Store;