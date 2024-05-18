package com.example.demo.Client;

import com.example.demo.Transaction.Transactiontype;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/client")
public class Clientcontroller {
    private final Clientservice clientservice;

    @Autowired
    public Clientcontroller(Clientservice clientservice) {
        this.clientservice = clientservice;
    }

    @GetMapping
    public List<Client> getClient() {
        return clientservice.Getclient();
    }

    @GetMapping("/{id}")
    public Client getclientbyid(@PathVariable int id) {
        return clientservice.getclientbyid(id);
    }

    @PostMapping
    public Void registernewClient(@RequestBody Client client) {
        clientservice.addnewclient(client);
        return null;
    }
    @DeleteMapping(path = "{clientId}")
    public void deleteStudent(@PathVariable("clientId") int clientId){
        clientservice.deleteclient(clientId);
    }

    @PutMapping(path="{clientid}")
    public void updateclient(@PathVariable("clientid") int clientid,
                              @RequestParam(required = false) String nom,
                              @RequestParam(required = false) String email){
        clientservice.updateclient(clientid,nom, email);
    }

}
