import React from 'react';
import './topfile.css';
import Button from '../../common/Styles/Buttons/button';

function Topfile() {
  return (
    <div className="topfile absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover, collect, & sell <span className="heading">Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
  Please make sure that you are buying and selling the most trending NFTs out there. Welcome to my channel Developer's Den.
</div>


        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button btnType="SECONDARY" btnText="Create" customClass="tf-left-sec-btn" />
        </div>

        
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">423K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt="diamond" src ="https://i.seadn.io/s/raw/files/7f34b4aa0b6e7665bcc59628037515c2.gif?auto=format&dpr=1&w=750"/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt="diamond" src ="https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1706378353306_fl1fhtxrvq2yu354mzvf4f59flbudfbu_400x400.webp"/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt="diamond" src ="https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1667541030366_d35qwj7v9lp5ybyp240ud5a5r5gnqjr8_400x400.webp"/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt="diamond" src ="https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1676884510955_uu0ecmurm7osqcakpqosv2hhbxc54xjc_400x400.webp"/>
          </div>
         
        
        
        
        
        
        
        
        
        
        </div>






      </div>
    </div>
  );
}

export default Topfile;
