package com.example.demo.Bienimmobilier;
import com.example.demo.Transaction.Transaction;
import com.example.demo.Transaction.Transactiontype;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BienimmobilierService {
    private final BienimmobilierRepository bienimmobilierRepository;

    @Autowired
    public BienimmobilierService(BienimmobilierRepository bienimmobilierRepository) {
        this.bienimmobilierRepository = bienimmobilierRepository;
    }

    public List<Bienimmobilier> Getbienimmobilier() { return  bienimmobilierRepository.findAll(); }

    public void addNewBien(Bienimmobilier bienimmobilier) {
        bienimmobilierRepository.save(bienimmobilier);
    }

    public void deleteBien(int bienid) {
        boolean exists = bienimmobilierRepository.existsById(bienid);
        if (!exists) {
            throw new IllegalStateException("bien does not exist");
        }
        bienimmobilierRepository.deleteById(bienid);
    }

    @Transactional
    public void updatebienimmobilier(int bienid, String description, Bienimmobiliertype type, int prix) {
        Bienimmobilier bienimmobilier = bienimmobilierRepository.findById(bienid).orElseThrow(() -> new IllegalStateException("bien not found"));
        if (prix > 0 && !Objects.equals(bienimmobilier.getPrix(), prix)) {
            bienimmobilier.setPrix(prix);
        }
        if (type !=null && !Objects.equals(bienimmobilier.getType(), type)) {
            bienimmobilier.setType(type);
        }
        if (description !=null && !Objects.equals(bienimmobilier.getDescription(), description)) {
            bienimmobilier.setDescription(description);
        }
    }

    public Bienimmobilier findbienbyid(int id) {
        return bienimmobilierRepository.findById(id).orElse(null);
    }
}
