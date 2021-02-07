
(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			// Global.
			global: {
				range: '*',
				containers: '80%',
				grid: {
					gutters: {
						vertical: '4em',
						horizontal: 0
					}
				}
			},
			// XLarge.
			xlarge: {
				range: '-1680',
				containers: '80%',
			},
			// Large.
			large: {
				range: '-1280',
				containers: '90%',
				grid: {
					gutters: {
						vertical: '2.5em'
					}
				},
				viewport: {
					scalable: false
				}
			},
			// Medium.
			medium: {
				range: '-930',
				containers: '80%',
				grid: {
					collapse: 1
				}
			},
			// Small.
			small: {
				range: '-736',
				containers: '80%',
				grid: {
					gutters: {
						vertical: '1.25em'
					}
				}
			},
			// XSmall.
			xsmall: {
				range: '-480',
				grid: {
					collapse: 2
				}
			}
		}
	});

})(jQuery);


