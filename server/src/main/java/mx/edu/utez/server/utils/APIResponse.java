package mx.edu.utez.server.utils;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class APIResponse {
    private String message;
    private Object data;
    private double result;
    private boolean error;
    private HttpStatus status;

    public APIResponse(String message,HttpStatus status) {
        this.message = message;
        this.status = status;
    }

    public APIResponse(String message, double result, HttpStatus status) {
        this.message = message;
        this.result = result;
        this.status = status;
    }

    public APIResponse(String message, Object data, HttpStatus status) {
        this.message = message;
        this.data = data;
        this.status = status;
    }

    public APIResponse(String message, boolean error, HttpStatus status) {
        this.message = message;
        this.error = error;
        this.status = status;
    }

}
