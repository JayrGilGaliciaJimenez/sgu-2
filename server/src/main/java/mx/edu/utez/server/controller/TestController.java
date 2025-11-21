package mx.edu.utez.server.controller;

import mx.edu.utez.server.controller.dto.ResultDto;
import mx.edu.utez.server.utils.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
@CrossOrigin("*")
public class TestController {

    @PostMapping("/getResult")
    public ResponseEntity<APIResponse> getResult(@RequestBody ResultDto dto) {

        APIResponse response = new APIResponse(
                "Restultado obtenido!",
                dto.getNum1() + dto.getNum2(),
                HttpStatus.OK

        );
        return new ResponseEntity<>(response, response.getStatus());
    }
}
