import { fetch_sidenavitem_pending, fetch_sidenavitem_success, fetch_topUseritem_success } from '../actions/sidenavitem';
// import axios from 'axios';


let dashboards = [
    // { 
    //     "key":"usersettings",
    //     "text":"shankar piriya | Super Administrator",
    //     "icon":"icon-tbl-settings",
    //     "url":null,
    //     "menuItems":[ 
    //        { 
    //           "key":"reset_password",
    //           "label":"Change Password",
    //           "url":null
    //        },
    //        { 
    //           "key":"account_data",
    //           "label":"Account Details",
    //           "url":null
    //        },
    //        { 
    //           "key":"logout",
    //           "label":"Log Out",
    //           "url":null
    //        }
    //     ]
    //  },
    {
        "key": "Dashboards",
        "text": "Dashboards",
        "icon": "pe-7s-rocket",
        "url": null,
        "menuItems": [
            {
                "key": "test_dashboard_2",
                "label": "Electrical Usage - Snapshot ",
                "url": "test_dashboard_2"
            },
            {
                "key": "test_dashboard",
                "label": "Performance Dashboard",
                "url": "test_dashboard"
            },
            {
                "key": "meter_electrical_usage",
                "label": "Electrical Energy Readings",
                "url": "meter_electrical_usage"
            },
            {
                "key": "electric_meters_test",
                "label": "Electric Meters Dashboard",
                "url": "electric_meters_test"
            },
            {
                "key": "electricity_parameters_dashboard",
                "label": "Power Quality Dashboard",
                "url": null,
                "menuItems": [
                    {
                        "key": "test_dashboard_2",
                        "label": "Power Quality Dashboard",
                        "url": "electricity_parameters_dashboard"
                    },
                ]
            }
        ]
    },
    {
        "key": "Notifications",
        "text": "Notifications",
        "icon": "icon-notification",
        "url": null,
        "menuItems": [

        ]
    },
    {
        "key": "Benchmarking",
        "text": "Benchmarking",
        "icon": "icon-graph",
        "url": null,
        "menuItems": [
            {
                "key": "electrical_utility_cost_benchmarking",
                "label": "Electrical Utility Cost Benchmarking",
                "url": "electrical_utility_cost_benchmarking"
            },
            {
                "key": "electrical_energy_usage_grid_benchmarking",
                "label": "Electrical Energy Usage - Grid Benchmarking",
                "url": "electrical_energy_usage_grid_benchmarking"
            },
            {
                "key": "electrical_eui_grid_benchmarking",
                "label": "Electrical EUI - Grid Benchmarking",
                "url": "electrical_eui_grid_benchmarking"
            },
            {
                "key": "electrical_energy_usage_onsite_benchmarking",
                "label": "Electrical Energy Usage - onsite Benchmarking",
                "url": "electrical_energy_usage_onsite_benchmarking"
            },
            {
                "key": "electrical_eui_onsite_benchmarking",
                "label": "Electrical EUI - onsite Benchmarking",
                "url": "electrical_eui_onsite_benchmarking"
            },
            {
                "key": "electrical_energy_usage_benchmarking",
                "label": "Electrical Energy Usage Benchmarking",
                "url": "electrical_energy_usage_benchmarking"
            },
            {
                "key": "electrical_eui_benchmarking",
                "label": "Electrical EUI Benchmarking",
                "url": "electrical_eui_benchmarking"
            },
            {
                "key": "carbon_emissions_benchmarking",
                "label": "Carbon Emissions Benchmarking",
                "url": "carbon_emissions_benchmarking"
            },
            {
                "key": "total_ghg_emissions_benchmarking",
                "label": "Total GHG emissions Benchmarking",
                "url": "total_ghg_emissions_benchmarking"
            }
        ]
    },
    {
        "key": "Trends",
        "text": "Trends",
        "icon": "icon-analysis-bargraph",
        "url": null,
        "menuItems": [
            {
                "key": "electrical_utility_cost_trends",
                "label": "Electrical Utility Cost Trends",
                "url": "electrical_utility_cost_trends"
            },
            {
                "key": "cost_index_trends",
                "label": "Cost Index Trends ",
                "url": "cost_index_trends"
            },
            {
                "key": "electrical_energy_usage_grid_trends",
                "label": "Electrical Energy Usage - Grid Trends",
                "url": "electrical_energy_usage_grid_trends"
            },
            {
                "key": "electrical_eui_grid_trends",
                "label": "Electrical EUI - Grid Trends",
                "url": "electrical_eui_grid_trends"
            },
            {
                "key": "electrical_energy_usage_onsite_trends",
                "label": "Electrical Energy Usage - onsite Trends",
                "url": "electrical_energy_usage_onsite_trends"
            },
            {
                "key": "electrical_eui_onsite_trends",
                "label": "Electrical EUI - onsite Trends",
                "url": "electrical_eui_onsite_trends"
            },
            {
                "key": "electrical_energy_usage_trends",
                "label": "Electrical Energy Usage Trends",
                "url": "electrical_energy_usage_trends"
            },
            {
                "key": "electrical_eui_trends",
                "label": "Electrical EUI Trends",
                "url": "electrical_eui_trends"
            }
        ]
    },
    {
        "key": "Users",
        "text": "Users",
        "icon": "icon-user-group",
        "url": 'users',
        "menuItems": [

        ]
    },
    {
        "key": "Locations",
        "text": "Locations",
        "icon": "icon-buildings",
        "url": "locations",
        "menuItems": [

        ]
    },
    {
        "key": "Reports",
        "text": "Reports",
        "icon": "icon-report",
        "url": null,
        "menuItems": [
            {
                "key": "energy_consumption_gri",
                "label": "GRI - Energy Consumption",
                "url": "energy_consumption_gri"
            },
            {
                "key": "water_consumption_gri",
                "label": "GRI - Water Consumption",
                "url": "water_consumption_gri"
            },
            {
                "key": "emissions_gri",
                "label": "GRI - Emissions",
                "url": "emissions_gri"
            },
            {
                "key": "hlp_gri",
                "label": "GRI - HLP Dashboard",
                "url": "hlp_gri"
            }
        ]
    },
    {
        "key": "Entities",
        "text": "Entities",
        "icon": "icon-building-2",
        "url": "entities",
        "menuItems": [

        ]
    },
    {
        "key": "IOTDevices",
        "text": "IOTDevices",
        "icon": "icon-building",
        "url": 'iotdevices',
        "menuItems": [

        ]
    },
    {
        "key": "Sensors",
        "text": "Sensors",
        "icon": "icon-meter-1",
        "url": 'sensors',
        "menuItems": [

        ]
    },
    {
        "key": "Gateways",
        "text": "Gateways",
        "icon": "icon-electric-tower",
        "url": 'gateways',
        "menuItems": [

        ]
    },
    {
        "key": "GRI Report",
        "text": "GRI Report",
        "icon": "icon-report",
        "url": null,
        "menuItems": [

        ]
    },
    {
        "key": "Rest",
        "text": "Rest",
        "icon": null,
        "url": null,
        "menuItems": [

        ]
    }
];

let topUserMenu = [
    {
        "key": "usersettings",
        "text": "shankar piriya | Super Administrator",
        "icon": "icon-tbl-settings",
        "url": null,
        "menuItems": [
            {
                "key": "reset_password",
                "label": "Change Password",
                "url": null
            },
            {
                "key": "account_data",
                "label": "Account Details",
                "url": null
            },
            {
                "key": "logout",
                "label": "Log Out",
                "url": null
            }
        ]
    },
]

export function fetchsidenavitemdata() {
    return dispatch => {
        dispatch(fetch_sidenavitem_pending());
        dispatch(fetch_sidenavitem_success(dashboards));
        return dashboards;
    }
}

export function fetchtopUseritemdata() {
    return dispatch => {
        dispatch(fetch_sidenavitem_pending());
        // fetch(SalesData)
        // .then(res => res.json())
        // .then(res => {
        // if (res.error) {
        //     throw (res.error);
        // }
        dispatch(fetch_topUseritem_success(topUserMenu));
        return topUserMenu;
        // })
        // .catch(error => {
        //     dispatch(fetch_sidenavitem_error(error));
        // })
    }
}











