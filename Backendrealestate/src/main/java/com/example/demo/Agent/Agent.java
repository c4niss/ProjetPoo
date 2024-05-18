package com.example.demo.Agent;

import com.example.demo.Bienimmobilier.Bienetat;
import com.example.demo.Bienimmobilier.Bienimmobilier;
import com.example.demo.Bienimmobilier.Bienimmobiliertype;
import jakarta.persistence.*;

@Entity
@Table(name = "Agent",
        uniqueConstraints = {
                @UniqueConstraint(name = "agent_email_unique", columnNames = "email")
})
public class Agent {

    @Id
    @SequenceGenerator(
            name = "agent_sequence",
            sequenceName = "agent_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "agent_sequence"
    )
    @Column(name = "id",
            updatable = false
    )
    private int id;
    @Column(name = "nom",
            columnDefinition = "TEXT")
    private String nom;
    @Column(name = "adresse",
            columnDefinition = "TEXT")
    private String adresse;
    @Column(name = "email",
            columnDefinition = "TEXT")
    private String email;
    @ManyToOne
    @JoinColumn(name = "id_bien")
    private Bienimmobilier idbien;



    public Agent(String nom, String adresse, String email,Bienimmobilier idbien) {

        this.nom = nom;
        this.adresse = adresse;
        this.email = email;
        this.idbien = idbien;
    }

    public Agent() {}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Bienimmobilier getIdbien() {
        return idbien;
    }

    public void setIdbien( Bienimmobilier idbien) {
        this.idbien = idbien;
    }

    @Override
    public String toString() {
        return "Agent{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", adresse='" + adresse + '\'' +
                ", email='" + email + '\'' +
                ", idbien=" + idbien +
                '}';
    }
}
