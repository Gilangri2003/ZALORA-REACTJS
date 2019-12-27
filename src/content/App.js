import React, {Component, Fragment} from 'react';
import '../App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
  return (
    <Fragment>
    <div id="first">
	<div id="fleft">
  <img src={require('../images/logo.jpg')}/>
		<ul>
			<li>
				<a href="#">WANITA</a>
			</li>
			<li>
				<a href="#">PRIA</a>
			</li>
			<li>
				<a href="#">ANAK-ANAK</a>
			</li>
			<li>
				<input type="text" placeholder="Cari produk, tren, dan merek" name="" padding="3px 5px 3px 8px" border-radius="5px"/>
				<img src={require('../images/Capture3.PNG')}/>
				<img src={require('../images/Capture2.PNG')}/>
      		    <img src={require('../images/Capture1.PNG')}/>
				<img src={require('../images/Capture4.PNG')}/>				
			</li>

		</ul>
	</div>
</div>
<div id="zwei">
	<ul>
		<li>
			<a href="#">TERBARU</a>
		</li>
		<li>
			<a href="#">ZALOCAL</a>
		</li>
		<li>
			<a href="#">PAKAIAN</a>
		</li>
		<li>
			<a href="#">SEPATU</a>
		</li>
		<li>
			<a href="#">TAS</a>
		</li>
		<li>
			<a href="#">JAM  AKSESORIS</a>
		</li>
		<li>
			<a href="#">BAJU MUSLIM</a>
		</li>
		<li>
			<a href="#">SPORT</a>
		</li>
		<li>
			<a href="#">BATIK</a>
		</li>
		<li>
			<a href="#">BEAUTY</a>
		</li>
		<li>
			<a href="#">BRANDS</a>
		</li>
		<li>
			<a href="#">FLAGSHIP STORES</a>
		</li>
	</ul>
</div>
<div id="drei">	
	<ul>
		<li>
			<img src={require('../images/1.PNG')}vertical-align=" middle" /><a href="#" > Produk Original dan Terjamin</a>
		</li>
		<li>
		<img src={require('../images/Capture.PNG')} vertical-align=" middle" /><a href="#">Ribuan Fashion Brand</a>
		</li>
		<li>
		<img src={require('../images/3.PNG')}vertical-align= "middle" /><a href="#">Gratis Pengembalian</a>
		</li>
		<li>
		<img src={require('../images/4.PNG')}vertical-align= "middle" /><a href="#">Pertanyaan?</a>
		</li>
	</ul>
	<input type="text" placeholder="Download dan dapatkan diskon 20%" name=""/>
	</div>
	<div id="wrapper">
		<div id="header1">
		<img src={require('../images/996x500_HERO_EOSS_WEEKENDSPECIAL_NCEC.gif')}/>
		</div>
		<div id="header2">
			<ul>
          <li>

		  <img src={require('../images/1.PNG')} vertical-align= "middle" /><a href="#">Produk Original dan Terjamin</a>
          </li>
          <li>
		  <img src={require('../images/Capture.PNG')} vertical-align= "middle" /><a href="#">Ribuan Fashion Brand</a>
          </li>
          <li>
		  <img src={require('../images/3.PNG')} vertical-align= "middle" /><a href="#">Gratis Pengembalian</a>
          </li>
	    </ul>
		</div>
		<div id="header3">
    <img src={require('../images/logo2.jpg')}/>
		</div>
		<div id="header4">
		<img src={require('../images/strip.jpg')}/>
			<p>Featured Brands</p>
		</div>
		<div id="header5">
    <img src={require('../images/zalora1.jpg')}/>
    <img src={require('../images/r4_somethingborrowed_revised.jpg')}/>
    <img src={require('../images/436x248_mobile_brands_cottonon.jpg')}/>
    <img src={require('../images/r4_mango.jpg')}/>
    <img src={require('../images/436x248_mobile_brands_keds.jpg')}/>
    <img src={require('../images/436x248_mobile_brands_levis.jpg')}/>
    <img src={require('../images/436x248_mobile_brands_puma.jpg')}/>
    <img src={require('../images/436x248_mobile_brands_levis.jpg')}/>
    <img src={require('../images/casio_r4_revised.jpg')}/>
    <img src={require('../images/r4_riverisland_20171117.jpg')}/>
    <img src={require('../images/guess.jpg')}/>
    <img src={require('../images/r4_nike.jpg')}/>
    <img src={require('../images/r4_mango.jpg')}/>
    <img src={require('../images/casio_r4_revised.jpg')}/>
		</div>
		<h2>Now This Week</h2>
		<div id="header6">
			<table width= "900px" margin= "auto">
				<tr height="200px">
					<td width="33.3%"  valign="top" text-align= "center" border-radius= "10px">
					<img src={require('../images/322x300_HOMEPAGE_ALLUNDER188K_WOMEN.jpg')}/>
						<p margin-top= "10px">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that i</p>
					</td>
					<td width="33.3%" valign="top" text-align="center" border-radius="10px">
					<img src={require('../images/322x300_HOMEPAGE_KEMEJADIBAWAH249_MEN.jpg')}/>
						<p margin-top= "10px">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that i</p>
					</td>
					<td width="33.3%" valign="top" text-align="center" border-radius="10px">
					<img src={require('../images/322x300_HOMEPAGE_CROSSBODYBAGS70OFF_WOMEN.jpg')}/>
						<p margin-top= "10px">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that i</p>
					</td>
				</tr>
			</table>

    </div>
      </div>

  </Fragment>
  );
  }
}
export default App;
