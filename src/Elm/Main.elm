module Main exposing (main)

import Html exposing (div,text)
import Html.Attributes exposing (id)


type alias Model =
    { framework : String
    }


initialModel : Model
initialModel =
    { framework = "Elm"
    }


main =
    div [ id "app" ]
        [ text initialModel.framework
        ]
