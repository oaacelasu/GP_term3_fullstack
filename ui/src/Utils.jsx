import React from "react";

import {useLocation, useNavigate, useParams} from "react-router-dom";

function getParam(WrappedComponent) {
    return c => <WrappedComponent {...c} params={useParams()} searchParams={new URLSearchParams(useLocation().search)}
                                  navigate={useNavigate()}/>
}

function buildQuery(searchQuery) {
    let q = "";
    for (let [key, value] of searchQuery.entries()) {
        if (value !== null && value !== "") {
            q += `${key}=${value}&`;
        }
    }

    // remove the last & if it exists
    if (q.endsWith("&")) {
        q = q.substring(0, q.length - 1);
    }

    return q;
}

export {getParam, buildQuery};