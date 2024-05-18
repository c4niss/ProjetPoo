package com.example.demo.Client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class Clientservice {
    private final Clientrepository clientrepository;
    @Autowired
    public Clientservice(Clientrepository clientrepository) {
        this.clientrepository = clientrepository;
    }

    public List<Client> Getclient() {
        return clientrepository.findAll();
    }

    public void addnewclient(Client client) {
        Optional<Client> clientbyemail =
                clientrepository.findclientbyemail(client.getEmail());
        if (clientbyemail.isPresent()) {
            throw new IllegalStateException("client already exists or email used before");

        }
        clientrepository.save(client);
    }
    public void deleteclient(int clientId) {
        boolean exists = clientrepository.existsById(clientId);
        if (!exists) {
            throw new IllegalStateException("client does not exist");
        }
        clientrepository.deleteById(clientId);


    }

    public void updateclient(int clientid, String nom, String email) {
        Client client = clientrepository.findById(clientid).orElseThrow(() -> new IllegalStateException("client not found") );
        if (!Objects.equals(client.getEmail(), email) && email != null) {
            client.setEmail(email);
        }
        if (!Objects.equals(client.getNom(), nom) && nom != null) {
            client.setNom(nom);
        }
    }
    public Optional<Client> findByEmail(String email) {
        return clientrepository.findclientbyemail(email);
    }

    public Client getclientbyid(int id) {
        return clientrepository.findById(id).orElse(null);
    }
}
