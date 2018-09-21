module ELMSampleTest exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Main exposing (main)
import Test exposing (..)


suite : Test
suite =
    describe "The String module"
        [ describe "Strig reverse"
            [ test "test elm" <|
                \_ -> Expect.equal 1 1
            ]
        ]
