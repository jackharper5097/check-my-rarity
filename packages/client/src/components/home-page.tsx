import { NftProjectsLoader } from "./nft-projects";
import { Icon } from "./icons";
import { OtherRarityTools } from "./other-rarity-tools";

export const HomePage = ()=>{

    return (
        <div
            style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'calc(100vh - 100px)'}}>
            <div className="container">
            <h1 className="heading">Newest Collections Added</h1>
            <NftProjectsLoader/>
            </div>
            {<CharacterArea/>
            /* <OtherRarityTools/> */}
        </div>
    );
};


const CharacterArea = (props:{})=>{
    return (
        <>
            {
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <a style={{display:"flex"}} href="/">
                        <img style={{height: 60}}
                            src={'/media/logo.png'} alt='site-logo'/>
                        </a>
                    </div>
                    <div className="col-md-6 col-12 float-center">
                        Copyright reserved by CheckMyRarity
                    </div>

                    <div className="col-md-3 col-12 float-end">
                        <a className="icon" href="/">
                            <Icon icon='twitter'/>
                        </a>
                        <a className="icon" href="/">
                            <Icon icon='discord'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            /* <div style={{display:'flex', flexDirection:'row'}}>
                <Character punkId={4856} name={'@NotChris'} link={`https://twitter.com/HemanCalvin`}/>
                <Character punkId={578} name={'@RickLove'} link={`https://twitter.com/Rick_00_Love`}/>
            </div> */
            }
        </>
    );
}

const Character = ({punkId, name, link}:{punkId:number, name:string, link?:string})=>{
    return (
        <>
            {/* <div className={link ? 'link':''}
                style={{padding: 8}}
                onClick={(e)=>{
                    if(!link){ return; } 
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(link);
                }}>
                <div>
                    <img style={{width: 150, height:150, objectFit:'contain'}} 
                        src={`/media/punk${punkId}.png`} alt="punk"/>
                </div>
                <div>
                    {!link && name}
                    {!!link && <a href={link}>{`${name}`}</a>}
                </div>
                <div>
                    {`OneDayPunk #${punkId}`}
                </div>
            </div> */}
        </>
    );
}