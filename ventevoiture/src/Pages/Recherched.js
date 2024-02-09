import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Recherched() {
    const mockData = {
        years: [2018, 2017, 2016],
        bodyStyles: ['sedan', 'van', 'roadster'],
        makes: ['toyota', 'holden', 'maecedes-benz'],
        conditions: ['something', 'something', 'something', 'something'],
        models: ['kia-rio', 'mitsubishi', 'ford'],
        prices: ['$0.00', '$0.00', '$0.00', '$0.00'],
      };
    
    const [years, setYears] = useState(mockData.years);
  // ... autres états pour les sélecteurs

  useEffect(() => {
    // Récupérer les données du backend lors du chargement du composant
    axios.get('http://votre-api.com/data')
      .then(response => {
        setYears(response.data.years);
        // ... mettre à jour les autres états avec les données du backend
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données du backend', error);
      });
  }, []);
  return (
    <div>
        <div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="model-search-content">
							<div className="row">
								<div className="col-md-offset-1 col-md-2 col-sm-12">
									<div className="single-model-search">
										<h2>select year</h2>
										<div className="model-select-icon">
                                        <select className="form-control">
                                                <option value="default">year</option>
                                                {years.map(year => (
                                                <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
										</div>{/* /.model-select-icon */}
									</div>
									<div className="single-model-search">
										<h2>body style</h2>
										<div className="model-select-icon">
											<select className="form-control">

											  	<option value="default">style</option>{/* /.option*/}

											  	<option value="sedan">sedan</option>{/* /.option*/}

											  	<option value="van">van</option>{/* /.option*/}
											  	<option value="roadster">roadster</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
								</div>
								<div className="col-md-offset-1 col-md-2 col-sm-12">
									<div className="single-model-search">
										<h2>select make</h2>
										<div className="model-select-icon">
											<select className="form-control">

											  	<option value="default">make</option>{/* /.option*/}

											  	<option value="toyota">toyota</option>{/* /.option*/}

											  	<option value="holden">holden</option>{/* /.option*/}
											  	<option value="maecedes-benz">maecedes-benz.</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
									<div className="single-model-search">
										<h2>car condition</h2>
										<div className="model-select-icon">
											<select className="form-control">

											  	<option value="default">condition</option>{/* /.option*/}

											  	<option value="something">something</option>{/* /.option*/}

											  	<option value="something">something</option>{/* /.option*/}
											  	<option value="something">something</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
								</div>
								<div className="col-md-offset-1 col-md-2 col-sm-12">
									<div className="single-model-search">
										<h2>select model</h2>
										<div className="model-select-icon">
											<select className="form-control">

											  	<option value="default">model</option>{/* /.option*/}

											  	<option value="kia-rio">kia-rio</option>{/* /.option*/}

											  	<option value="mitsubishi">mitsubishi</option>{/* /.option*/}
											  	<option value="ford">ford</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
									<div className="single-model-search">
										<h2>select price</h2>
										<div className="model-select-icon">
											<select className="form-control">

											  	<option value="default">price</option>{/* /.option*/}

											  	<option value="$0.00">$0.00</option>{/* /.option*/}

											  	<option value="$0.00">$0.00</option>{/* /.option*/}
											  	<option value="$0.00">$0.00</option>{/* /.option*/}

											</select>{/* /.select*/}
										</div>{/* /.model-select-icon */}
									</div>
								</div>
								<div className="col-md-2 col-sm-12">
									<div className="single-model-search text-center">
										<button className="welcome-btn model-search-btn" onclick="window.location.href='#'">
											search
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Recherched