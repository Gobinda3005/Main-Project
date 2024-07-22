import { Carousel } from 'react-bootstrap'

const sampleStyle = {
	width: '100vw',
}

function Home() {
    return (
			<div className=' h-100 w-100'>
				<Carousel className=' h-100 w-100'>
					<Carousel.Item
						className='h-auto'
						style={sampleStyle}>
						<img
							src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-finish-select-gallery-202211-blue-wifi_AV1_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670631580247'
						alt=''
						height="100%"
						width="100%"
						/>
						<Carousel.Caption>
							<h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
								ducimus debitis suscipit aliquid, illo sapiente laboriosam
								eligendi reiciendis blanditiis, temporibus, laudantium officiis
								incidunt optio quibusdam.
							</h3>
              <div class='flex items-center flex-wrap '>
												<a class='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>
													<button onClick={() => dispatch(addCart(pr))}>
														Add to cart
													</button>
												</a>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item
						className='h-auto'
						style={sampleStyle}>
						<img
							src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202212_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1668554661108'
							alt=''
							height='100%'
							width='100%'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div class='flex items-center flex-wrap '>
												<a class='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>
													<button onClick={() => dispatch(addCart(pr))}>
														Add to cart
													</button>
												</a>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item
						className='h-auto'
						style={sampleStyle}>
						<img
							src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-storage-select-202207-pink-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670879027965'
							alt=''
							height='100%'
							width='100%'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div class='flex items-center flex-wrap '>
												<a class='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>
													<button onClick={() => dispatch(addCart(pr))}>
														Add to cart
													</button>
												</a>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		)
}

export default Home