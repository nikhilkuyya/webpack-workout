module Main exposing (main)

import Html exposing (..)


type alias Model =
    { framework : String
    }


initialModel : Model
initialModel =
    { framework = "Elm"
    }


main =
    div []
        [ text initialModel.framework
        ]
