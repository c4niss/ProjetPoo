package com.example.demo.Bienimmobilier;
import com.example.demo.Transaction.Transactiontype;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/bien")
public class BienimmobilierController {
    private final BienimmobilierService bienimmobilierService;

    @Autowired
    public BienimmobilierController(BienimmobilierService bienimmobilierService) {
        this.bienimmobilierService = bienimmobilierService;
    }
    @GetMapping
    public List<Bienimmobilier> getBienimmobilier() {
        return bienimmobilierService.Getbienimmobilier();
    }

    @GetMapping("/{id}")
    public Bienimmobilier getbienimmobilierById(@PathVariable int id) {
        return bienimmobilierService.findbienbyid(id);
    }
    @PostMapping
    public void registerNewStudent(@RequestBody Bienimmobilier bienimmobilier){
        bienimmobilierService.addNewBien(bienimmobilier);
    }
    @DeleteMapping(path = "{bienid}")
    public void deleteStudent(@PathVariable("bienid") int bienid){
        bienimmobilierService.deleteBien(bienid);
    }@PutMapping(path="{bienid}")
    public void updatebien(@PathVariable("bienid") int bienid,
                           @RequestParam(required = false) String description,
                           @RequestParam(required = false) Bienimmobiliertype type,
                           @RequestParam(required = false) int prix,
                           @RequestParam(required = false) Bienetat etat) {  // Add etat parameter
        bienimmobilierService.updatebienimmobilier(bienid, description, type, prix, etat);  // Pass etat to the service
    }


}
