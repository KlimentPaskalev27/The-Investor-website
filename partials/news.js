function compileFilteredNews()
{
    var governmentnews = {
        "articles": [
            {
                "title": "Are the Olympics over?",
                "description": "As the new wave of the pandemic comes, sports media are questioning the Olympics taking place. Governments are considering postponing participation and the event as a whole.",
                "date": "11/04/2020",
                "image": "<img src='images/news/stadium.jpeg' alt='stadium image'></img>"
            },
            {
                "title": "Covid new rules for travel",
                "description": "The EU has agreed to ensure that a travel passport is issued for those who get a vaccine.",
                "date": "24/02/2021",
                "image": "<img src='images/carousel/covidbanner.jpeg' alt='Covid image'></img>"
            },
            {
                "title": "Flight companies receive government aid",
                "description": "Which flight companies received a government vaccine against the Covid recession? Were they in danger of going bankcrupt?",
                "date": "27/02/2021",
                "image": "<img src='images/carousel/flights.jpeg' alt='Flights image'></img>"
            },
            {
                "title": "How can the Whitehouse rebuild what an entire nation has destroyed?",
                "description": "The newly elected president of the US has a very demanding job ahead of him. The riots that were provoked during the elections have shown how the nation is devided, something that will surely pose a drawback in every bill that is going to be passed int he near future.",
                "date": "07/11/2020",
                "image": "<img src='images/news/whitehouse.jpeg' alt='White House'></img>"
            }
        ]
    }

    var investmentnews = {
        "articles": [
            {
                "title": "How Covid caused a boom in medical research investments",
                "description": "Economics always react uniquely to world events, and the pandemic is no exception.",
                "date": "04/07/2020",
                "image": "<img src='images/news/lab.jpeg' alt='laboratory image'></img>"
            },
            {
                "title": "What replaced gold in 2021",
                "description": "As the excavation of gold has been strongly taken up by many precious metal companies, such as Dundee Precious, the price of gold has been quickly surpassed by a new material on the open market. Simply because of it's need in medicine and technology, platinum has now become the most sought metal.",
                "date": "13/06/2019",
                "image": "<img src='images/news/gold.jpeg' alt='Gold image'></img>"
            },
            {
                "title": "The Turkish currency collapse",
                "description": "Erdogan's political affairs during the past 2 years have completely destroyed the Turkish currency. How the USA affected that is yet to be analysed.",
                "date": "11/09/2020",
                "image": "<img src='images/news/turkey.jpeg' alt='Turkey image'></img>"
            },
            {
                "title": "Bitcoin with a new peak",
                "description": "The cryptocurrency reached a new high this Monday, with a new record of $50,000.",
                "date": "14/02/2021",
                "image": "<img src='images/carousel/cryptoBanner.jpeg' alt='cryptocurrency image'></img>"
            },
            {
                "title": "The money in your savings account",
                "description": "How the money you've saved for months or years that is sitting in the bank slowly decreases in value even when you're offered an interest rate.",
                "date": "27/02/2021",
                "image": "<img src='images/news/savings.jpeg' alt='Savings image'></img>"
            },
            {
            "title": "The raging petrol war between Russia and UAE",
            "description": "The price we pay at the petrol station while filling our tank changes daily as a result of the affairs between these two major exporters.",
            "date": "34/02/2021",
            "image": "<img src='images/carousel/petrolpump.jpeg' alt='War on petrol image'></img>"
            }
        ]
    }

    var technews = {
        "articles": [
            {
                "title": "SpaceX stocks blasted off to space",
                "description": "The recent achievements of the first ever private company to launch rockets to space have boosted its interest in stocks quite substantially.",
                "date": "27/02/2021",
                "image": "<img src='images/carousel/spacex.jpg' alt='Rocket image'></img>"
            },
            {
                "title": "How safe are the platforms you keep your money in?",
                "description": "A letest report by the European Monetary Fund has found that security of online money investment platforms is rather easy to breach by any experienced hacker. New requirements might be issued in the next couple of years.",
                "date": "07/11/2020",
                "image": "<img src='images/news/hack.jpeg' alt='Hacker image'></img>"
            },
            {
                "title": "From zero to hero",
                "description": "How much did PlayStation make by bringing out the latest PS5? The company has achieved an amazing development since the very first console has been brought into the market.",
                "date": "24/02/2021",
                "image": "<img src='images/news/ps.jpeg' alt='PlayStation console image'></img>"
            },
            {
                "title": "Elon Musk plans Mars holidays",
                "description": "The SpaceX company officially started seeling tickets to Mars.",
                "date": "07/11/2020",
                "image": "<img src='images/news/rocket.jpg' alt='Rocket image'></img>"
            }
        ]
    }

    var agrinews = {
        "articles": [
            {
                "title": "The steady price indices of agricultural products",
                "description": "During the past year, the percentage at which vegetable production has increased its price from the producer to the end-buyer has been fenominal. Analysts expect these tendencies to increase as vegetarian diets are becoming more popular and are vastly used by GPs to tackle health issues in patients.",
                "date": "22/03/2019",
                "image": "<img src='images/news/veggie.jpeg' alt='Vegetables'></img>"
            },
            {
                "title": "Why are sheep the best animals in the business?",
                "description": "Many producers have shared that they have switched from traditional milk animals to mostly sheep. Sheep end products like cheese and yoghurt are becoming a demanded good on the market. The wool is also an additional commodity producers sell.",
                "date": "10/10/2019",
                "image": "<img src='images/news/sheep.jpeg' alt='Sheep'></img>"
            },
            {
                "title": "Are people more productive than machines when it comes to plantwork?",
                "description": "A recent analysys has surveyed a large group of producers in the sector, finding out which exhibit better output when it comes to comparing human capital and technology.",
                "date": "21/05/2020",
                "image": "<img src='images/news/plantwork.jpeg' alt='Plantwork'></img>"
            },
            {
                "title": "Organic dairy versus UHT milk",
                 "description": "The price difference between the new bio/organic milk one can find in stores nowadays and the long-lasing UHT milk boxes is around 6 times. How do businesses profit when it comes to both kinds?",
                "date": "07/11/2020",
                "image": "<img src='images/news/cow.jpeg' alt='Milk cows'></img>"
            },
            {
                "title": "The not-so-nice scent of lavender",
                "description": "The most recent trends in parfume production show that lavender is now in abundance. Just a few years back. the price or a gallon of lavender oil was astounding. Recent findings show that lavender farmers now even struggle to sell and break-even.",
                "date": "11/09/2020",
                "image": "<img src='images/news/lavender.jpeg' alt='Lavender'></img>"
            }
        ]
    }

    var greennews = {
        "articles": [
            {
                "title": "The increasing prices of solar energy",
                "description": "In contrast to what has been a trend in the last decade, the prices in solar power indices has now started going upwards and is steadily keeping its growth.",
                "date": "15/07/2020",
                "image": "<img src='images/news/solar.jpeg' alt='Solar panels'></img>"
            },
            {
                "title": "How electric cars and hybrid cars are going to become the new normal",
                "description": "Research shows that many governments are now adopting a new policy towards polution. With the Paris Accord keeping track of how its country members are doing, the slow but sure requirement for a eco-friendly vehicle is quickly growing.",
                "date": "02/10/2020",
                "image": "<img src='images/news/elcars.jpeg' alt='Sheep'></img>"
            },
            {
                "title": "Is wind energy worth it?",
                "description": "Contrary to expectations, it seems that wind turbines are more expensive to maintain than the price of electric output they provide. However, the electricity market is quite volatile so at times electricity is very expensive which makes up for the times where turbines are not cost-efficient.",
                "date": "16/04/2019",
                "image": "<img src='images/news/wind.jpeg' alt='Wind turbines'></img>"
            }
        ]
    }

    function compileInvestmentNews()
    {
        const checkboxes = document.querySelectorAll('input[name="filter"]:checked');
        let newsFilters = [];
        checkboxes.forEach((checkbox) => 
        {
            newsFilters.splice(1, 0, checkbox.value);
        });
        if (  newsFilters.includes("investmentnews")  ) 
        {
            if ( renderInvestmentNews == false )
            {
                document.querySelectorAll('.investment-news-box').forEach(function(a)
                    {
                        a.classList.remove('hidden');
                    })
                    if (compiledGovernmentNews == false)
                    {
                        var articlesTemplate = $("#investment-news").html();
                        var compiledArticlesTemplate = Handlebars.compile(articlesTemplate);
                        $(".investment-news").html(compiledArticlesTemplate(investmentnews));
                        compiledGovernmentNews = true;
                    }
                var x = document.getElementsByClassName("investment-news-box");
                for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove('hidden');
                }
                renderInvestmentNews = true;
            }
            else {
                return false;
            }
        }
        if ( !newsFilters.includes("investmentnews") && renderInvestmentNews == true) 
        {
            document.querySelectorAll('.investment-news-box').forEach(function(a)
            {
 
                a.classList.add('hidden');
            })
            renderInvestmentNews = false;
        }
    }

    function compileGovernmentNews()
    {
        const checkboxes = document.querySelectorAll('input[name="filter"]:checked');
        let newsFilters = [];
        checkboxes.forEach((checkbox) => 
        {
            newsFilters.splice(1, 0, checkbox.value);
        });

        if (  newsFilters.includes("governmentnews")  ) 
        {
            if ( renderGovernmentNews == false )
            {
                document.querySelectorAll('.government-news-box').forEach(function(a)
                    {
                        a.classList.remove('hidden');
                    })
                    if (compiledGovernmentNews == false)
                    {
                        var articlesTemplate = $("#government-news").html();
                        var compiledArticlesTemplate = Handlebars.compile(articlesTemplate);
                        $(".government-news").html(compiledArticlesTemplate(governmentnews));
                        compiledGovernmentNews = true;
                    }
                var x = document.getElementsByClassName("government-news-box");
                for (var i = 0; i < x.length; i++) 
                {
                     x[i].classList.remove('hidden');
                }
                renderGovernmentNews = true;
            }
            else {
                return false;
            }
        }
        if ( !newsFilters.includes("governmentnews") && renderGovernmentNews == true) 
        {
            document.querySelectorAll('.government-news-box').forEach(function(a)
            {
                a.classList.add('hidden');
            })
            renderGovernmentNews = false;
        }
    }

    function compileAgricultureNews()
    {
        const checkboxes = document.querySelectorAll('input[name="filter"]:checked');
        let newsFilters = [];
        checkboxes.forEach((checkbox) => 
        {
            newsFilters.splice(1, 0, checkbox.value);
        });
        if (  newsFilters.includes("agrinews")  ) 
        {
            if ( renderAgricultureNews == false )
            {
                document.querySelectorAll('.agriculture-news-box').forEach(function(a)
                    {
                        a.classList.remove('hidden');
                    })
                    if (compiledAgricultureNews == false)
                    {
                        var articlesTemplate = $("#agriculture-news").html();
                        var compiledArticlesTemplate = Handlebars.compile(articlesTemplate);
                        $(".agriculture-news").html(compiledArticlesTemplate(agrinews));
                        compiledAgricultureNews = true;
                    }
                var x = document.getElementsByClassName("agriculture-news-box");
                for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove('hidden');
                }
                renderAgricultureNews = true;
            }
            else {
                return false;
            }
        }
        if ( !newsFilters.includes("agrinews") && renderAgricultureNews == true) 
        {
            if ( newsFilters == null)
            {
                console.log("Filters are empty");
            }
            document.querySelectorAll('.agriculture-news-box').forEach(function(a)
            {
                a.classList.add('hidden');
            })
            renderAgricultureNews = false;
        }
    }

    function compileTechnologyNews()
    {
        const checkboxes = document.querySelectorAll('input[name="filter"]:checked');
        let newsFilters = [];
        checkboxes.forEach((checkbox) => 
        {
            newsFilters.splice(1, 0, checkbox.value);
        });
        if (  newsFilters.includes("technews")  ) 
        {
            if ( renderTechnologyNews == false )
            {
                document.querySelectorAll('.technology-news-box').forEach(function(a)
                    {
                        a.classList.remove('hidden');
                    })
                    if (compiledTechnologyNews == false)
                    {
                        var articlesTemplate = $("#technology-news").html();
                        var compiledArticlesTemplate = Handlebars.compile(articlesTemplate);
                        $(".technology-news").html(compiledArticlesTemplate(technews));
                        compiledTechnologyNews = true;
                    }
                var x = document.getElementsByClassName("technology-news-box");
                for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove('hidden');
                }
                renderTechnologyNews = true;
            }
            else {
                return false;
            }
        }
        if ( !newsFilters.includes("technews") && renderTechnologyNews == true) 
        {
            document.querySelectorAll('.technology-news-box').forEach(function(a)
            {
                a.classList.add('hidden');
            })
            renderTechnologyNews = false;
        }
    }

    function compileGreenNews()
    {
        const checkboxes = document.querySelectorAll('input[name="filter"]:checked');
        let newsFilters = [];
        checkboxes.forEach((checkbox) => 
        {
            newsFilters.splice(1, 0, checkbox.value);
        });
        if (  newsFilters.includes("greennews")  ) 
        {
            if ( renderGreenNews == false )
            {
                document.querySelectorAll('.green-news-box').forEach(function(a)
                    {
                        a.classList.remove('hidden');
                    })
                    if (compiledGreenNews == false)
                    {
                        var articlesTemplate = $("#green-news").html();
                        var compiledArticlesTemplate = Handlebars.compile(articlesTemplate);
                        $(".green-news").html(compiledArticlesTemplate(greennews));
                        compiledGreenNews = true;
                    }
                var x = document.getElementsByClassName("green-news-box");
                for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove('hidden');
                }
                renderGreenNews = true;
            }
            else {
                return false;
            }
        }
        if ( !newsFilters.includes("greennews") && renderGreenNews == true) 
        {
            document.querySelectorAll('.green-news-box').forEach(function(a)
            {
                a.classList.add('hidden');
            })
            renderGreenNews = false;
        }
    }

    // function that runs all the filter checks... 
    // ...and compiles news according to filter checkboxes
    function compileNews() 
    {
        compileGovernmentNews();
        compileInvestmentNews(); 
        compileTechnologyNews();
        compileAgricultureNews();  
        compileGreenNews(); 
    }

    // Declare variables that toggle which articles to display... 
    // ...according to ticked tickboxes and to check what is already displayed
    var renderGovernmentNews = false;
    var compiledGovernmentNews = false;

    var renderInvestmentNews = false;
    var compiledGovernmentNews = false;

    var renderTechnologyNews = false;
    var compiledTechnologyNews = false;

    var renderAgricultureNews = false;
    var compiledAgricultureNews = false;

    var renderGreenNews = false;
    var compiledGreenNews = false;

    // Onclick event for the "Apply filters" button
    const submit = document.querySelector('#Submit');
    submit.onclick = () => {
        compileNews();
    };
}



