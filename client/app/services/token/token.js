import angular from 'angular';


let tokenService = angular.module('tokenService', [])
    .service('$token', service)
    .name;



function service($http, $static, $q) {
    "ngInject";
    this.SignIn = (params = {}) => {
        var req = {
            method: 'POST',
            url: `${$static.baseUrl}/Token/SignIn`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: `Username=${params.userName}&password=${params.password}`

        }
        return $q(function (resolve, reject) {

            $http(req).then((res) => {
                localStorage.setItem('token', res.data.data.token.access_token);
                resolve(res)

            }, (err) => {
                reject(err)
            })
        });
        // let response = $q((reject, resolve) => {

        //     $http(req).then((res) => {
        //         localStorage.setItem('token', res.data.data.token.access_token);
        //         resolve(res)
        //         // response = {
        //         //     code: res.data.code,
        //         //     message: res.data.message
        //         // }
        //         // return response;
        //     })
        // })
        // return response;


    }

    this.Refresh = (token) => {
        var req = {
            method: 'POST',
            url: `${$static.baseUrl}/Token/Refresh`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + token
            },


        }
        return $q(function (resolve, reject) {
            $http(req).then((res) => {
                localStorage.setItem('token', res.data.data.token.access_token);
                resolve(res)

            }, (err) => {
                reject(err)
            })
        });
    }
}

export default tokenService;