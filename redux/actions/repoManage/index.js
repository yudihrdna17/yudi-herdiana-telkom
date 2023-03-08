import * as type from "../../types";

export const findGit = (data) => async dispatch => {
        const response = await fetch(
            "https://api.github.com/users/"+data+"/repos"
        );
        const api = await response.json();
        dispatch({ type: type.ASSIGN_REPO, payload: api });
        dispatch({ type: type.FIND_GIT, data: data });
}