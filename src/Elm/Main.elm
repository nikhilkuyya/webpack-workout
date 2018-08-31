module Main exposing (main)

import Html exposing (..)
import Html.Attributes exposing (..)


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
